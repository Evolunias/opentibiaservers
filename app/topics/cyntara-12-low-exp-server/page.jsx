import Cyntara12LowExpServerKeywordPage, { generateMetadata } from './cyntara-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara12LowExpServerKeywordPage />;
}
