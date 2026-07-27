import Serenity96NonPvpServerKeywordPage, { generateMetadata } from './serenity-9-6-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96NonPvpServerKeywordPage />;
}
