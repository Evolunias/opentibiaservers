import Serenity80PvpServerKeywordPage, { generateMetadata } from './serenity-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80PvpServerKeywordPage />;
}
