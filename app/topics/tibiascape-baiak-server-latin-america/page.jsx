import TibiascapeBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './tibiascape-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeBaiakServerLatinAmericaKeywordPage />;
}
