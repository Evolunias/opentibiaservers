import Serenity76PvpServerKeywordPage, { generateMetadata } from './serenity-7-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity76PvpServerKeywordPage />;
}
