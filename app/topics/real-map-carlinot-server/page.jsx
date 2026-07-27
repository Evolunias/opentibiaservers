import RealMapCarlinotServerKeywordPage, { generateMetadata } from './real-map-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotServerKeywordPage />;
}
