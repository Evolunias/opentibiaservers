import CustomAmeriaWikiKeywordPage, { generateMetadata } from './custom-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaWikiKeywordPage />;
}
