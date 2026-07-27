import OfficialNoxiousotOtKeywordPage, { generateMetadata } from './official-noxiousot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotOtKeywordPage />;
}
