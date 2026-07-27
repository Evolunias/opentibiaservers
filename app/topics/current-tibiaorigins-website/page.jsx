import CurrentTibiaoriginsWebsiteKeywordPage, { generateMetadata } from './current-tibiaorigins-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsWebsiteKeywordPage />;
}
