import RealMapStatusBrazilKeywordPage, { generateMetadata } from './real-map-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapStatusBrazilKeywordPage />;
}
