import Cyntara11LowExpServerKeywordPage, { generateMetadata } from './cyntara-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11LowExpServerKeywordPage />;
}
