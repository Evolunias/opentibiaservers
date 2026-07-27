import NtoStar13RetroServerKeywordPage, { generateMetadata } from './nto-star-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13RetroServerKeywordPage />;
}
