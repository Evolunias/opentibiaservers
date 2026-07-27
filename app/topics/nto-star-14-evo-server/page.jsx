import NtoStar14EvoServerKeywordPage, { generateMetadata } from './nto-star-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14EvoServerKeywordPage />;
}
