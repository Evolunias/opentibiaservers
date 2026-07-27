import TibianusLatinAmericaServersKeywordPage, { generateMetadata } from './tibianus-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusLatinAmericaServersKeywordPage />;
}
