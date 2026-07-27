import Serenity13RetroServerKeywordPage, { generateMetadata } from './serenity-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13RetroServerKeywordPage />;
}
