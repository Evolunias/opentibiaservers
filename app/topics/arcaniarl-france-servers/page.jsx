import ArcaniarlFranceServersKeywordPage, { generateMetadata } from './arcaniarl-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlFranceServersKeywordPage />;
}
