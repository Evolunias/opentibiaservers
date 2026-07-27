import Rubinot15RealMapServerKeywordPage, { generateMetadata } from './rubinot-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15RealMapServerKeywordPage />;
}
