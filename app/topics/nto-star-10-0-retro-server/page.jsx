import NtoStar100RetroServerKeywordPage, { generateMetadata } from './nto-star-10-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar100RetroServerKeywordPage />;
}
