import ClassickDrakoriaUkServersKeywordPage, { generateMetadata } from './classick-drakoria-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaUkServersKeywordPage />;
}
