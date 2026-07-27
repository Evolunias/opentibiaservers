import Serenity15PvpServerKeywordPage, { generateMetadata } from './serenity-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15PvpServerKeywordPage />;
}
