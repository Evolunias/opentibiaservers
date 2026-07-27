import Serenity15PvpeServerKeywordPage, { generateMetadata } from './serenity-15-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15PvpeServerKeywordPage />;
}
