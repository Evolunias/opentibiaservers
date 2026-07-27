import CustomTibiaoriginsWikiKeywordPage, { generateMetadata } from './custom-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsWikiKeywordPage />;
}
