import Serenity12NonPvpServerKeywordPage, { generateMetadata } from './serenity-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12NonPvpServerKeywordPage />;
}
