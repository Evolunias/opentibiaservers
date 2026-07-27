import CurrentTibijkaOtsKeywordPage, { generateMetadata } from './current-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaOtsKeywordPage />;
}
