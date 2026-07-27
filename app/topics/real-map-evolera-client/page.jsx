import RealMapEvoleraClientKeywordPage, { generateMetadata } from './real-map-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoleraClientKeywordPage />;
}
