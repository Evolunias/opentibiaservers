import Serenity81PvpServerKeywordPage, { generateMetadata } from './serenity-8-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81PvpServerKeywordPage />;
}
