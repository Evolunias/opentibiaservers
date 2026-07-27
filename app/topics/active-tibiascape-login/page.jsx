import ActiveTibiascapeLoginKeywordPage, { generateMetadata } from './active-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeLoginKeywordPage />;
}
