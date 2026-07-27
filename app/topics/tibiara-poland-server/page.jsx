import TibiaraPolandServerKeywordPage, { generateMetadata } from './tibiara-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPolandServerKeywordPage />;
}
