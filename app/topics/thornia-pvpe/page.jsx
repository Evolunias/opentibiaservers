import ThorniaPvpeKeywordPage, { generateMetadata } from './thornia-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaPvpeKeywordPage />;
}
