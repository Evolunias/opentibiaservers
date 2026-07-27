import CurrentTibiaoriginsGuideKeywordPage, { generateMetadata } from './current-tibiaorigins-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsGuideKeywordPage />;
}
