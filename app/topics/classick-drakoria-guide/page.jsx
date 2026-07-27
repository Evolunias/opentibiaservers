import ClassickDrakoriaGuideKeywordPage, { generateMetadata } from './classick-drakoria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaGuideKeywordPage />;
}
