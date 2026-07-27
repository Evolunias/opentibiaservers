import Serenity71RetroServerKeywordPage, { generateMetadata } from './serenity-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71RetroServerKeywordPage />;
}
