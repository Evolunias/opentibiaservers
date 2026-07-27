import CurrentTibiaoriginsKeywordPage, { generateMetadata } from './current-tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsKeywordPage />;
}
