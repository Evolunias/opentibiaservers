import RealMapEvoleraServersKeywordPage, { generateMetadata } from './real-map-evolera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoleraServersKeywordPage />;
}
