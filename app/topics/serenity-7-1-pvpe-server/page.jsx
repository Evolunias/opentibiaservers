import Serenity71PvpeServerKeywordPage, { generateMetadata } from './serenity-7-1-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71PvpeServerKeywordPage />;
}
