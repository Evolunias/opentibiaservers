import NtoStar81RetroServerKeywordPage, { generateMetadata } from './nto-star-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar81RetroServerKeywordPage />;
}
