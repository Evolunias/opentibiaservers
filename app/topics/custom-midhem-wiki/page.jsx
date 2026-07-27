import CustomMidhemWikiKeywordPage, { generateMetadata } from './custom-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemWikiKeywordPage />;
}
