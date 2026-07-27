import PvpeCyntaraServerKeywordPage, { generateMetadata } from './pvpe-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeCyntaraServerKeywordPage />;
}
