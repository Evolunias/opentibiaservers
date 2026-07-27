import Serenity84PvpeServerKeywordPage, { generateMetadata } from './serenity-8-4-pvpe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84PvpeServerKeywordPage />;
}
