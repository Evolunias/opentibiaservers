import NtoStar13EvoServerKeywordPage, { generateMetadata } from './nto-star-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13EvoServerKeywordPage />;
}
