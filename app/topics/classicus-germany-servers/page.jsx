import ClassicusGermanyServersKeywordPage, { generateMetadata } from './classicus-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusGermanyServersKeywordPage />;
}
