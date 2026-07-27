import VineraServerKeywordPage, { generateMetadata } from './vinera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraServerKeywordPage />;
}
