import Serenity11PvpeServerKeywordPage, { generateMetadata } from './serenity-11-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11PvpeServerKeywordPage />;
}
