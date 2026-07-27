import RealeraArgentinaServerKeywordPage, { generateMetadata } from './realera-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraArgentinaServerKeywordPage />;
}
