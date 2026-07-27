import HibernaPage, { generateMetadata } from './hiberna';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HibernaPage />;
}
