import ClassickDrakoriaSeasonKeywordPage, { generateMetadata } from './classick-drakoria-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaSeasonKeywordPage />;
}
