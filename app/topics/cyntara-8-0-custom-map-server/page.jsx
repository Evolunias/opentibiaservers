import Cyntara80CustomMapServerKeywordPage, { generateMetadata } from './cyntara-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara80CustomMapServerKeywordPage />;
}
