import TibiascapeBaiakServerSwedenKeywordPage, { generateMetadata } from './tibiascape-baiak-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeBaiakServerSwedenKeywordPage />;
}
