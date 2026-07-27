import ClassicusLatinAmericaServersKeywordPage, { generateMetadata } from './classicus-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusLatinAmericaServersKeywordPage />;
}
