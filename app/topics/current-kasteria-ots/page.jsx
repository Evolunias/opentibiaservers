import CurrentKasteriaOtsKeywordPage, { generateMetadata } from './current-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaOtsKeywordPage />;
}
