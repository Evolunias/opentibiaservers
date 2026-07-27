import TopOlderaKeywordPage, { generateMetadata } from './top-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaKeywordPage />;
}
