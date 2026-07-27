import Serenity86PvpServerKeywordPage, { generateMetadata } from './serenity-8-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86PvpServerKeywordPage />;
}
