import OfficialNoxiousotServerKeywordPage, { generateMetadata } from './official-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotServerKeywordPage />;
}
