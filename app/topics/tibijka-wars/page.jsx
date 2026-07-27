import TibijkaWarsKeywordPage, { generateMetadata } from './tibijka-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaWarsKeywordPage />;
}
