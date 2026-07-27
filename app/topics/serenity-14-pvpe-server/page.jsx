import Serenity14PvpeServerKeywordPage, { generateMetadata } from './serenity-14-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14PvpeServerKeywordPage />;
}
