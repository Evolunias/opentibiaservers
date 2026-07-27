import NtoStarLatinAmericaServersKeywordPage, { generateMetadata } from './nto-star-latin-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarLatinAmericaServersKeywordPage />;
}
