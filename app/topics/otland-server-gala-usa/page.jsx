import OtlandServerGalaUsaKeywordPage, { generateMetadata } from './otland-server-gala-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaUsaKeywordPage />;
}
