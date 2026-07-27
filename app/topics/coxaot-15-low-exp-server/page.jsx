import Coxaot15LowExpServerKeywordPage, { generateMetadata } from './coxaot-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15LowExpServerKeywordPage />;
}
