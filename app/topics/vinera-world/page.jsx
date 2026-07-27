import VineraWorldKeywordPage, { generateMetadata } from './vinera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraWorldKeywordPage />;
}
