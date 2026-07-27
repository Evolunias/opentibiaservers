import EvoleraPvpeKeywordPage, { generateMetadata } from './evolera-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraPvpeKeywordPage />;
}
