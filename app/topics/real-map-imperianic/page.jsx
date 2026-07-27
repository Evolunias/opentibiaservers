import RealMapImperianicKeywordPage, { generateMetadata } from './real-map-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicKeywordPage />;
}
