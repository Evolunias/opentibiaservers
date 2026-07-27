import ClassicusUkServersKeywordPage, { generateMetadata } from './classicus-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusUkServersKeywordPage />;
}
