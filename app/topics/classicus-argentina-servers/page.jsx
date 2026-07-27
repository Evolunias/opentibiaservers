import ClassicusArgentinaServersKeywordPage, { generateMetadata } from './classicus-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusArgentinaServersKeywordPage />;
}
