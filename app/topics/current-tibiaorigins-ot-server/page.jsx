import CurrentTibiaoriginsOtServerKeywordPage, { generateMetadata } from './current-tibiaorigins-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsOtServerKeywordPage />;
}
