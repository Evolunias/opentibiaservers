import OfficialSaintsotKeywordPage, { generateMetadata } from './official-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotKeywordPage />;
}
