import TibiaretroSimilarServersKeywordPage, { generateMetadata } from './tibiaretro-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroSimilarServersKeywordPage />;
}
