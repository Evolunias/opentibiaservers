import CurrentTibijkaOtServerKeywordPage, { generateMetadata } from './current-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaOtServerKeywordPage />;
}
