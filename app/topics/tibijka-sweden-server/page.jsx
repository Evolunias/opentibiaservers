import TibijkaSwedenServerKeywordPage, { generateMetadata } from './tibijka-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaSwedenServerKeywordPage />;
}
