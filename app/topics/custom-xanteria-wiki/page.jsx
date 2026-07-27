import CustomXanteriaWikiKeywordPage, { generateMetadata } from './custom-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaWikiKeywordPage />;
}
