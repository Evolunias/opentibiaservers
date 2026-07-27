import CurrentTibiaraOtsKeywordPage, { generateMetadata } from './current-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraOtsKeywordPage />;
}
