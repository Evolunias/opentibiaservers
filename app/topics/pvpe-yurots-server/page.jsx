import PvpeYurotsServerKeywordPage, { generateMetadata } from './pvpe-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeYurotsServerKeywordPage />;
}
