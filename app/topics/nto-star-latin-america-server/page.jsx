import NtoStarLatinAmericaServerKeywordPage, { generateMetadata } from './nto-star-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarLatinAmericaServerKeywordPage />;
}
