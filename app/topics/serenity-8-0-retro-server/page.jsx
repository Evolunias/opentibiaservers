import Serenity80RetroServerKeywordPage, { generateMetadata } from './serenity-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80RetroServerKeywordPage />;
}
