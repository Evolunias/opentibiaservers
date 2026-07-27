import Serenity84RetroServerKeywordPage, { generateMetadata } from './serenity-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84RetroServerKeywordPage />;
}
