import ArcaniarlFranceServerKeywordPage, { generateMetadata } from './arcaniarl-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlFranceServerKeywordPage />;
}
