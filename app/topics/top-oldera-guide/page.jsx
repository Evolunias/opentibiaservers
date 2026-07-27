import TopOlderaGuideKeywordPage, { generateMetadata } from './top-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaGuideKeywordPage />;
}
