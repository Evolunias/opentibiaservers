import TibiascapeBaiakServerBrazilKeywordPage, { generateMetadata } from './tibiascape-baiak-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeBaiakServerBrazilKeywordPage />;
}
