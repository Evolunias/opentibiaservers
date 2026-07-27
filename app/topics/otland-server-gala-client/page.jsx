import OtlandServerGalaClientKeywordPage, { generateMetadata } from './otland-server-gala-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaClientKeywordPage />;
}
