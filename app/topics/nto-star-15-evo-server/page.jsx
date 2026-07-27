import NtoStar15EvoServerKeywordPage, { generateMetadata } from './nto-star-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15EvoServerKeywordPage />;
}
