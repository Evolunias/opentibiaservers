import CustomUnlineWikiKeywordPage, { generateMetadata } from './custom-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineWikiKeywordPage />;
}
