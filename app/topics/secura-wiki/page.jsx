import SecuraWikiKeywordPage, { generateMetadata } from './secura-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraWikiKeywordPage />;
}
