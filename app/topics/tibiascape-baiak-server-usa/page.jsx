import TibiascapeBaiakServerUsaKeywordPage, { generateMetadata } from './tibiascape-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeBaiakServerUsaKeywordPage />;
}
