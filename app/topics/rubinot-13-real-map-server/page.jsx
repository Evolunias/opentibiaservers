import Rubinot13RealMapServerKeywordPage, { generateMetadata } from './rubinot-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13RealMapServerKeywordPage />;
}
