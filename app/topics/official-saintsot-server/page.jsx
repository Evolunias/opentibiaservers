import OfficialSaintsotServerKeywordPage, { generateMetadata } from './official-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotServerKeywordPage />;
}
