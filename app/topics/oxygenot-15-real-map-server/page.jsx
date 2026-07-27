import Oxygenot15RealMapServerKeywordPage, { generateMetadata } from './oxygenot-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot15RealMapServerKeywordPage />;
}
