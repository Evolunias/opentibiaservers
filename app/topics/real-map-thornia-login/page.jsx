import RealMapThorniaLoginKeywordPage, { generateMetadata } from './real-map-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaLoginKeywordPage />;
}
