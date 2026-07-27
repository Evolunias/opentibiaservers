import Nilot13RealMapServerKeywordPage, { generateMetadata } from './nilot-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13RealMapServerKeywordPage />;
}
