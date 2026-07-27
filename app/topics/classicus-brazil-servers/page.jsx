import ClassicusBrazilServersKeywordPage, { generateMetadata } from './classicus-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusBrazilServersKeywordPage />;
}
