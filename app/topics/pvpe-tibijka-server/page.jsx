import PvpeTibijkaServerKeywordPage, { generateMetadata } from './pvpe-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeTibijkaServerKeywordPage />;
}
