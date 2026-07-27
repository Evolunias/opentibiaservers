import OtlandServerGalaEuropeKeywordPage, { generateMetadata } from './otland-server-gala-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaEuropeKeywordPage />;
}
