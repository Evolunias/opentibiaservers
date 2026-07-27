import HighExpOlderaServerKeywordPage, { generateMetadata } from './high-exp-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpOlderaServerKeywordPage />;
}
