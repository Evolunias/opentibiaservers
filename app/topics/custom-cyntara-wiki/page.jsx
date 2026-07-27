import CustomCyntaraWikiKeywordPage, { generateMetadata } from './custom-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraWikiKeywordPage />;
}
