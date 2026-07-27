import NewSaintsotOfficialKeywordPage, { generateMetadata } from './new-saintsot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotOfficialKeywordPage />;
}
