import OtServerListOldSchoolKeywordPage, { generateMetadata } from './ot-server-list-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListOldSchoolKeywordPage />;
}
