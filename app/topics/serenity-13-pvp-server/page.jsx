import Serenity13PvpServerKeywordPage, { generateMetadata } from './serenity-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13PvpServerKeywordPage />;
}
