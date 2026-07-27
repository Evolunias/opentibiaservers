import ClassickDrakoriaLoginKeywordPage, { generateMetadata } from './classick-drakoria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaLoginKeywordPage />;
}
