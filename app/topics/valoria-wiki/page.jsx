import ValoriaWikiKeywordPage, { generateMetadata } from './valoria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValoriaWikiKeywordPage />;
}
