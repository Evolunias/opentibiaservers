import Cyntara86CustomMapServerKeywordPage, { generateMetadata } from './cyntara-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara86CustomMapServerKeywordPage />;
}
