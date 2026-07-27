import VenoreotBaiakServerNorthAmericaKeywordPage, { generateMetadata } from './venoreot-baiak-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotBaiakServerNorthAmericaKeywordPage />;
}
