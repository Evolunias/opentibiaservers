import RealMapAlasteraLoginKeywordPage, { generateMetadata } from './real-map-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraLoginKeywordPage />;
}
