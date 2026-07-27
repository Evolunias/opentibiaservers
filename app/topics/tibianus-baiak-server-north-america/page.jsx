import TibianusBaiakServerNorthAmericaKeywordPage, { generateMetadata } from './tibianus-baiak-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusBaiakServerNorthAmericaKeywordPage />;
}
