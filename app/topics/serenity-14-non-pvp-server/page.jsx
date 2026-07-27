import Serenity14NonPvpServerKeywordPage, { generateMetadata } from './serenity-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14NonPvpServerKeywordPage />;
}
