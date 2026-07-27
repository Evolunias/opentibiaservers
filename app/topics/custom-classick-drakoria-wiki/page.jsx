import CustomClassickDrakoriaWikiKeywordPage, { generateMetadata } from './custom-classick-drakoria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaWikiKeywordPage />;
}
