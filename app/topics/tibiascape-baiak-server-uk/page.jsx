import TibiascapeBaiakServerUkKeywordPage, { generateMetadata } from './tibiascape-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeBaiakServerUkKeywordPage />;
}
