import AmeriaPvpeKeywordPage, { generateMetadata } from './ameria-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaPvpeKeywordPage />;
}
