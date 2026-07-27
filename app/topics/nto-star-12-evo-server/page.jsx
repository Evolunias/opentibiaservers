import NtoStar12EvoServerKeywordPage, { generateMetadata } from './nto-star-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12EvoServerKeywordPage />;
}
