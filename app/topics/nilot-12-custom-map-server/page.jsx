import Nilot12CustomMapServerKeywordPage, { generateMetadata } from './nilot-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot12CustomMapServerKeywordPage />;
}
