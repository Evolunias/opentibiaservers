import Otland2026KeywordPage, { generateMetadata } from './otland-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otland2026KeywordPage />;
}
