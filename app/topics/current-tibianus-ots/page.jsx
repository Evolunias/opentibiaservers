import CurrentTibianusOtsKeywordPage, { generateMetadata } from './current-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusOtsKeywordPage />;
}
