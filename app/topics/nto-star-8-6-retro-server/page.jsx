import NtoStar86RetroServerKeywordPage, { generateMetadata } from './nto-star-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar86RetroServerKeywordPage />;
}
