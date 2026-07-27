import PvpeThaisotServerKeywordPage, { generateMetadata } from './pvpe-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeThaisotServerKeywordPage />;
}
