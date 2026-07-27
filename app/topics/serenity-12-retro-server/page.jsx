import Serenity12RetroServerKeywordPage, { generateMetadata } from './serenity-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12RetroServerKeywordPage />;
}
