import ClassickDrakoriaUsaServerKeywordPage, { generateMetadata } from './classick-drakoria-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaUsaServerKeywordPage />;
}
