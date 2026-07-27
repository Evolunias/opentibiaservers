import ClassicusBrazilServerKeywordPage, { generateMetadata } from './classicus-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusBrazilServerKeywordPage />;
}
