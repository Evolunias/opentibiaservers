import RealMapThorniaKeywordPage, { generateMetadata } from './real-map-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaKeywordPage />;
}
