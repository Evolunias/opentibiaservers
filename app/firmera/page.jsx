import FirmeraPage, { generateMetadata } from './firmera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FirmeraPage />;
}
