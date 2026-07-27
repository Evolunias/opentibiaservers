import CurrentNostaltherWikiKeywordPage, { generateMetadata } from './current-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherWikiKeywordPage />;
}
