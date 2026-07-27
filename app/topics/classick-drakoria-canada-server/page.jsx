import ClassickDrakoriaCanadaServerKeywordPage, { generateMetadata } from './classick-drakoria-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaCanadaServerKeywordPage />;
}
