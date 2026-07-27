import OlderaPolandServerKeywordPage, { generateMetadata } from './oldera-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaPolandServerKeywordPage />;
}
