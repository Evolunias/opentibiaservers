import NtoStar12RetroServerKeywordPage, { generateMetadata } from './nto-star-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12RetroServerKeywordPage />;
}
