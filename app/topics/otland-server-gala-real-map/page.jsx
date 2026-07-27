import OtlandServerGalaRealMapKeywordPage, { generateMetadata } from './otland-server-gala-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaRealMapKeywordPage />;
}
