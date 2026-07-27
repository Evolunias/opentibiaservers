import ObleraPage, { generateMetadata } from './oblera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObleraPage />;
}
