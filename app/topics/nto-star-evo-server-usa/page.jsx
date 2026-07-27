import NtoStarEvoServerUsaKeywordPage, { generateMetadata } from './nto-star-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarEvoServerUsaKeywordPage />;
}
