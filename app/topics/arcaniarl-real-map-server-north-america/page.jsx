import ArcaniarlRealMapServerNorthAmericaKeywordPage, { generateMetadata } from './arcaniarl-real-map-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlRealMapServerNorthAmericaKeywordPage />;
}
