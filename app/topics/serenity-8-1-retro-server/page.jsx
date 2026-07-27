import Serenity81RetroServerKeywordPage, { generateMetadata } from './serenity-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81RetroServerKeywordPage />;
}
