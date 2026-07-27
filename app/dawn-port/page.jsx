import DawnPortPage, { generateMetadata } from './dawn-port';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DawnPortPage />;
}
