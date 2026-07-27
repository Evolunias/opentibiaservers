import Coxaot14CustomMapServerKeywordPage, { generateMetadata } from './coxaot-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot14CustomMapServerKeywordPage />;
}
