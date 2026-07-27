import CurrentNepreniaOtsKeywordPage, { generateMetadata } from './current-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaOtsKeywordPage />;
}
