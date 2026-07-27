import CurrentTibiaoriginsOtsKeywordPage, { generateMetadata } from './current-tibiaorigins-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsOtsKeywordPage />;
}
