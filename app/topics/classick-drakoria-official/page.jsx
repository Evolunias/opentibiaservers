import ClassickDrakoriaOfficialKeywordPage, { generateMetadata } from './classick-drakoria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaOfficialKeywordPage />;
}
