import Serenity15RetroServerKeywordPage, { generateMetadata } from './serenity-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15RetroServerKeywordPage />;
}
