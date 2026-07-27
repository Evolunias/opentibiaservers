import NtoStar11EvoServerKeywordPage, { generateMetadata } from './nto-star-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar11EvoServerKeywordPage />;
}
