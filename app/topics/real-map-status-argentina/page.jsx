import RealMapStatusArgentinaKeywordPage, { generateMetadata } from './real-map-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapStatusArgentinaKeywordPage />;
}
