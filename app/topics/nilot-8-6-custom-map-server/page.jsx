import Nilot86CustomMapServerKeywordPage, { generateMetadata } from './nilot-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot86CustomMapServerKeywordPage />;
}
