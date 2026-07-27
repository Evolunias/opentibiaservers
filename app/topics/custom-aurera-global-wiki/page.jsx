import CustomAureraGlobalWikiKeywordPage, { generateMetadata } from './custom-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAureraGlobalWikiKeywordPage />;
}
