import CurrentOlderaOtsKeywordPage, { generateMetadata } from './current-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaOtsKeywordPage />;
}
