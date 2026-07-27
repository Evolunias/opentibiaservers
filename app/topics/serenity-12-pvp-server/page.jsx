import Serenity12PvpServerKeywordPage, { generateMetadata } from './serenity-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12PvpServerKeywordPage />;
}
