import Nilot80CustomMapServerKeywordPage, { generateMetadata } from './nilot-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot80CustomMapServerKeywordPage />;
}
