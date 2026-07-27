import CustomElderaWikiKeywordPage, { generateMetadata } from './custom-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaWikiKeywordPage />;
}
