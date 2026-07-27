import Serenity14RetroServerKeywordPage, { generateMetadata } from './serenity-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14RetroServerKeywordPage />;
}
