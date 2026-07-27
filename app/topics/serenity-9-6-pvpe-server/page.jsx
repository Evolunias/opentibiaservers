import Serenity96PvpeServerKeywordPage, { generateMetadata } from './serenity-9-6-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96PvpeServerKeywordPage />;
}
