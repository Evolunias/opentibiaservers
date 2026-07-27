import ArcaniarlLatinAmericaServerKeywordPage, { generateMetadata } from './arcaniarl-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlLatinAmericaServerKeywordPage />;
}
