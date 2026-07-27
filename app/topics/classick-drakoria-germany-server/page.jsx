import ClassickDrakoriaGermanyServerKeywordPage, { generateMetadata } from './classick-drakoria-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaGermanyServerKeywordPage />;
}
