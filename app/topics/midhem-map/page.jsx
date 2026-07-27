import MidhemMapKeywordPage, { generateMetadata } from './midhem-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemMapKeywordPage />;
}
