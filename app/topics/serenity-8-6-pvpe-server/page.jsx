import Serenity86PvpeServerKeywordPage, { generateMetadata } from './serenity-8-6-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86PvpeServerKeywordPage />;
}
