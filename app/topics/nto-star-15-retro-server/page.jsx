import NtoStar15RetroServerKeywordPage, { generateMetadata } from './nto-star-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15RetroServerKeywordPage />;
}
