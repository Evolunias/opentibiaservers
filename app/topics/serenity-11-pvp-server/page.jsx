import Serenity11PvpServerKeywordPage, { generateMetadata } from './serenity-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11PvpServerKeywordPage />;
}
