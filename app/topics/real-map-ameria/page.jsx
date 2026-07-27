import RealMapAmeriaKeywordPage, { generateMetadata } from './real-map-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaKeywordPage />;
}
