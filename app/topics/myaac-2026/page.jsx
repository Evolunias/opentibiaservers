import Myaac2026KeywordPage, { generateMetadata } from './myaac-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Myaac2026KeywordPage />;
}
