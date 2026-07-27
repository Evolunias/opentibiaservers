import CurrentNoxiousotOtsKeywordPage, { generateMetadata } from './current-noxiousot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotOtsKeywordPage />;
}
