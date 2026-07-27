import ClassicusUsaServersKeywordPage, { generateMetadata } from './classicus-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusUsaServersKeywordPage />;
}
