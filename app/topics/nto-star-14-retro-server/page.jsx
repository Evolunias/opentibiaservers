import NtoStar14RetroServerKeywordPage, { generateMetadata } from './nto-star-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14RetroServerKeywordPage />;
}
