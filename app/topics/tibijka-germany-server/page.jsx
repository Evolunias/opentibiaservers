import TibijkaGermanyServerKeywordPage, { generateMetadata } from './tibijka-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaGermanyServerKeywordPage />;
}
