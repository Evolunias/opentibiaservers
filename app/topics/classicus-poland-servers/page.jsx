import ClassicusPolandServersKeywordPage, { generateMetadata } from './classicus-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusPolandServersKeywordPage />;
}
