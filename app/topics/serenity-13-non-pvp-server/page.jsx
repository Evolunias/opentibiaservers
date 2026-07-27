import Serenity13NonPvpServerKeywordPage, { generateMetadata } from './serenity-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13NonPvpServerKeywordPage />;
}
