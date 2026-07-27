import ChronaPage, { generateMetadata } from './chrona';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ChronaPage />;
}
