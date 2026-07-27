import OtlandServerGalaActiveKeywordPage, { generateMetadata } from './otland-server-gala-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaActiveKeywordPage />;
}
