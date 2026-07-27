import Serenity86RetroServerKeywordPage, { generateMetadata } from './serenity-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86RetroServerKeywordPage />;
}
