import NoResetTibiaoriginsWikiKeywordPage, { generateMetadata } from './no-reset-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaoriginsWikiKeywordPage />;
}
