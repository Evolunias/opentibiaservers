import Nilot13CustomMapServerKeywordPage, { generateMetadata } from './nilot-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13CustomMapServerKeywordPage />;
}
