import RealMapThorniaClientKeywordPage, { generateMetadata } from './real-map-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaClientKeywordPage />;
}
