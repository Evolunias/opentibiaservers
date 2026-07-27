import CurrentElderaOtsKeywordPage, { generateMetadata } from './current-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaOtsKeywordPage />;
}
