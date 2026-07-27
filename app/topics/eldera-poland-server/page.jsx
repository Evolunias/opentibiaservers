import ElderaPolandServerKeywordPage, { generateMetadata } from './eldera-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaPolandServerKeywordPage />;
}
