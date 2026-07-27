import Oxygenot12RealMapServerKeywordPage, { generateMetadata } from './oxygenot-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot12RealMapServerKeywordPage />;
}
