import EvoNtoStarServerKeywordPage, { generateMetadata } from './evo-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoNtoStarServerKeywordPage />;
}
