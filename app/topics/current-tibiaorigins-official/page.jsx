import CurrentTibiaoriginsOfficialKeywordPage, { generateMetadata } from './current-tibiaorigins-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsOfficialKeywordPage />;
}
