import LowrateNoxiousotOtsKeywordPage, { generateMetadata } from './lowrate-noxiousot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotOtsKeywordPage />;
}
