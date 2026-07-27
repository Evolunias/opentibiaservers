import TibianusBaiakServerUkKeywordPage, { generateMetadata } from './tibianus-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusBaiakServerUkKeywordPage />;
}
