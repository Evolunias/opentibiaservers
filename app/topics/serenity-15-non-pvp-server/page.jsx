import Serenity15NonPvpServerKeywordPage, { generateMetadata } from './serenity-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15NonPvpServerKeywordPage />;
}
