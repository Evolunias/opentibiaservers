import TibijkaBossesKeywordPage, { generateMetadata } from './tibijka-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaBossesKeywordPage />;
}
