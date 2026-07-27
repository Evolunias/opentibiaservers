import Coxaot11LowExpServerKeywordPage, { generateMetadata } from './coxaot-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11LowExpServerKeywordPage />;
}
