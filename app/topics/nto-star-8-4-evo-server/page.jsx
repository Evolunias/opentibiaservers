import NtoStar84EvoServerKeywordPage, { generateMetadata } from './nto-star-8-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar84EvoServerKeywordPage />;
}
