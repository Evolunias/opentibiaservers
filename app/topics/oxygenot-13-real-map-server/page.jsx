import Oxygenot13RealMapServerKeywordPage, { generateMetadata } from './oxygenot-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot13RealMapServerKeywordPage />;
}
