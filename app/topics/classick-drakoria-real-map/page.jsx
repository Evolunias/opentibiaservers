import ClassickDrakoriaRealMapKeywordPage, { generateMetadata } from './classick-drakoria-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaRealMapKeywordPage />;
}
