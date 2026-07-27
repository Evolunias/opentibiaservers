import TibijkaArgentinaServerKeywordPage, { generateMetadata } from './tibijka-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaArgentinaServerKeywordPage />;
}
