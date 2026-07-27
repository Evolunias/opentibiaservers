import Serenity100RetroServerKeywordPage, { generateMetadata } from './serenity-10-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity100RetroServerKeywordPage />;
}
