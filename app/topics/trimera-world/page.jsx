import TrimeraWorldKeywordPage, { generateMetadata } from './trimera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraWorldKeywordPage />;
}
