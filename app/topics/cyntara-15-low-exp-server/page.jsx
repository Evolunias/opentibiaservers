import Cyntara15LowExpServerKeywordPage, { generateMetadata } from './cyntara-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15LowExpServerKeywordPage />;
}
