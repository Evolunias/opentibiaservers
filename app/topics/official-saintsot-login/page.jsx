import OfficialSaintsotLoginKeywordPage, { generateMetadata } from './official-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotLoginKeywordPage />;
}
