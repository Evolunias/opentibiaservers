import BlackdPage, { generateMetadata } from './blackd';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlackdPage />;
}
