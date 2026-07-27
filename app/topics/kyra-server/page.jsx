import KyraServerKeywordPage, { generateMetadata } from './kyra-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KyraServerKeywordPage />;
}
