import CurrentSaintsotOfficialKeywordPage, { generateMetadata } from './current-saintsot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotOfficialKeywordPage />;
}
