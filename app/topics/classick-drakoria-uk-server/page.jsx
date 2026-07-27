import ClassickDrakoriaUkServerKeywordPage, { generateMetadata } from './classick-drakoria-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaUkServerKeywordPage />;
}
