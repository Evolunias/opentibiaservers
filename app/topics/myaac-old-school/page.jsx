import MyaacOldSchoolKeywordPage, { generateMetadata } from './myaac-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacOldSchoolKeywordPage />;
}
