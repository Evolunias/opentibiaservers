import PvpeRubinotServerKeywordPage, { generateMetadata } from './pvpe-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeRubinotServerKeywordPage />;
}
