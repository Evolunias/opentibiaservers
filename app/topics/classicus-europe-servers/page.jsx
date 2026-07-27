import ClassicusEuropeServersKeywordPage, { generateMetadata } from './classicus-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusEuropeServersKeywordPage />;
}
