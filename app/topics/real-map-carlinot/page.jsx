import RealMapCarlinotKeywordPage, { generateMetadata } from './real-map-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotKeywordPage />;
}
