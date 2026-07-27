import Serenity13PvpeServerKeywordPage, { generateMetadata } from './serenity-13-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13PvpeServerKeywordPage />;
}
