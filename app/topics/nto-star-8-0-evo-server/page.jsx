import NtoStar80EvoServerKeywordPage, { generateMetadata } from './nto-star-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar80EvoServerKeywordPage />;
}
