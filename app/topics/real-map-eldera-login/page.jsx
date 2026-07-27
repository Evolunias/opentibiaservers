import RealMapElderaLoginKeywordPage, { generateMetadata } from './real-map-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaLoginKeywordPage />;
}
