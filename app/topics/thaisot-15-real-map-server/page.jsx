import Thaisot15RealMapServerKeywordPage, { generateMetadata } from './thaisot-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot15RealMapServerKeywordPage />;
}
