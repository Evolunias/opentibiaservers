import ArcaniarlRealMapServerLatinAmericaKeywordPage, { generateMetadata } from './arcaniarl-real-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlRealMapServerLatinAmericaKeywordPage />;
}
