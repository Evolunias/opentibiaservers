import CurrentTibiascapeLoginKeywordPage, { generateMetadata } from './current-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeLoginKeywordPage />;
}
