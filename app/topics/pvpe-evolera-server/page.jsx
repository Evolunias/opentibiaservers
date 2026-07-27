import PvpeEvoleraServerKeywordPage, { generateMetadata } from './pvpe-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeEvoleraServerKeywordPage />;
}
