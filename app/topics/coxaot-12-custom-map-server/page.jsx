import Coxaot12CustomMapServerKeywordPage, { generateMetadata } from './coxaot-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12CustomMapServerKeywordPage />;
}
