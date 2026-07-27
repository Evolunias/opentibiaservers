import Coxaot15CustomMapServerKeywordPage, { generateMetadata } from './coxaot-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15CustomMapServerKeywordPage />;
}
