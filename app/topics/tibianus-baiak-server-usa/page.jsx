import TibianusBaiakServerUsaKeywordPage, { generateMetadata } from './tibianus-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusBaiakServerUsaKeywordPage />;
}
