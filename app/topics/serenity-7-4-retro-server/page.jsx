import Serenity74RetroServerKeywordPage, { generateMetadata } from './serenity-7-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity74RetroServerKeywordPage />;
}
