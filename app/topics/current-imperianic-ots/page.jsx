import CurrentImperianicOtsKeywordPage, { generateMetadata } from './current-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicOtsKeywordPage />;
}
