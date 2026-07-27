import RealMapEvoleraServerKeywordPage, { generateMetadata } from './real-map-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoleraServerKeywordPage />;
}
