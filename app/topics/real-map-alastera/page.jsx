import RealMapAlasteraKeywordPage, { generateMetadata } from './real-map-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraKeywordPage />;
}
