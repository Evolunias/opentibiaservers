import Serenity11RetroServerKeywordPage, { generateMetadata } from './serenity-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11RetroServerKeywordPage />;
}
