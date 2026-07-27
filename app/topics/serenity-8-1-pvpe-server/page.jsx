import Serenity81PvpeServerKeywordPage, { generateMetadata } from './serenity-8-1-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81PvpeServerKeywordPage />;
}
