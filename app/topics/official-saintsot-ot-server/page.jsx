import OfficialSaintsotOtServerKeywordPage, { generateMetadata } from './official-saintsot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotOtServerKeywordPage />;
}
