import LowrateAmeriaClientKeywordPage, { generateMetadata } from './lowrate-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaClientKeywordPage />;
}
