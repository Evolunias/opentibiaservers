import Nilot15CustomMapServerKeywordPage, { generateMetadata } from './nilot-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot15CustomMapServerKeywordPage />;
}
