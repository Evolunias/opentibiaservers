import OfficialNoxiousotOtsKeywordPage, { generateMetadata } from './official-noxiousot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotOtsKeywordPage />;
}
