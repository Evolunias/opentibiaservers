import Thaisot12RealMapServerKeywordPage, { generateMetadata } from './thaisot-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12RealMapServerKeywordPage />;
}
