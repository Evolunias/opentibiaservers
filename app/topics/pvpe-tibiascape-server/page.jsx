import PvpeTibiascapeServerKeywordPage, { generateMetadata } from './pvpe-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeTibiascapeServerKeywordPage />;
}
