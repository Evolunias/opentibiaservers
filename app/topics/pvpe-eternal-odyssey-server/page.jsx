import PvpeEternalOdysseyServerKeywordPage, { generateMetadata } from './pvpe-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeEternalOdysseyServerKeywordPage />;
}
