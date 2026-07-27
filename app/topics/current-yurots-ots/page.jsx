import CurrentYurotsOtsKeywordPage, { generateMetadata } from './current-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsOtsKeywordPage />;
}
