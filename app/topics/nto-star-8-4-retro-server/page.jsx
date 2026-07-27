import NtoStar84RetroServerKeywordPage, { generateMetadata } from './nto-star-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar84RetroServerKeywordPage />;
}
