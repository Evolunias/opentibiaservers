import NtoStar100EvoServerKeywordPage, { generateMetadata } from './nto-star-10-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar100EvoServerKeywordPage />;
}
