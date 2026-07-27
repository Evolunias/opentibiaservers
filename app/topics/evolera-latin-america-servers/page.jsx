import EvoleraLatinAmericaServersKeywordPage, { generateMetadata } from './evolera-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraLatinAmericaServersKeywordPage />;
}
