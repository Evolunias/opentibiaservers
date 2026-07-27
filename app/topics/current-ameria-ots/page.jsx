import CurrentAmeriaOtsKeywordPage, { generateMetadata } from './current-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaOtsKeywordPage />;
}
