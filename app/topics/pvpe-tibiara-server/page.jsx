import PvpeTibiaraServerKeywordPage, { generateMetadata } from './pvpe-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeTibiaraServerKeywordPage />;
}
