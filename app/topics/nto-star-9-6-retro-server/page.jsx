import NtoStar96RetroServerKeywordPage, { generateMetadata } from './nto-star-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar96RetroServerKeywordPage />;
}
