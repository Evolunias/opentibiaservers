import Serenity12PvpeServerKeywordPage, { generateMetadata } from './serenity-12-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12PvpeServerKeywordPage />;
}
