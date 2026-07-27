import MarlboroWarPage, { generateMetadata } from './marlboro-war';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarlboroWarPage />;
}
