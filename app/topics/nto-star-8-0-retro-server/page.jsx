import NtoStar80RetroServerKeywordPage, { generateMetadata } from './nto-star-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar80RetroServerKeywordPage />;
}
