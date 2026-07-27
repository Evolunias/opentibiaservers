import CurrentCarlinotOtsKeywordPage, { generateMetadata } from './current-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotOtsKeywordPage />;
}
