import Serenity96RetroServerKeywordPage, { generateMetadata } from './serenity-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96RetroServerKeywordPage />;
}
