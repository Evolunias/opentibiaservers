import NtoStar11RetroServerKeywordPage, { generateMetadata } from './nto-star-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar11RetroServerKeywordPage />;
}
