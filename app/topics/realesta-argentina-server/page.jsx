import RealestaArgentinaServerKeywordPage, { generateMetadata } from './realesta-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaArgentinaServerKeywordPage />;
}
