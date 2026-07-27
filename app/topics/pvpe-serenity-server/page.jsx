import PvpeSerenityServerKeywordPage, { generateMetadata } from './pvpe-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeSerenityServerKeywordPage />;
}
