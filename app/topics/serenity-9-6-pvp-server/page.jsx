import Serenity96PvpServerKeywordPage, { generateMetadata } from './serenity-9-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96PvpServerKeywordPage />;
}
