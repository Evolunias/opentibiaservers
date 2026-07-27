import Rubinot12RealMapServerKeywordPage, { generateMetadata } from './rubinot-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot12RealMapServerKeywordPage />;
}
