import CurrentTibiaoriginsOtKeywordPage, { generateMetadata } from './current-tibiaorigins-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsOtKeywordPage />;
}
