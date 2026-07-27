import Coxaot12LowExpServerKeywordPage, { generateMetadata } from './coxaot-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12LowExpServerKeywordPage />;
}
