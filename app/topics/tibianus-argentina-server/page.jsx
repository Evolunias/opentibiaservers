import TibianusArgentinaServerKeywordPage, { generateMetadata } from './tibianus-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusArgentinaServerKeywordPage />;
}
