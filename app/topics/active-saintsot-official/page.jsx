import ActiveSaintsotOfficialKeywordPage, { generateMetadata } from './active-saintsot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotOfficialKeywordPage />;
}
