import ClassickDrakoriaMapKeywordPage, { generateMetadata } from './classick-drakoria-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaMapKeywordPage />;
}
