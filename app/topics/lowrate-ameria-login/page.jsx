import LowrateAmeriaLoginKeywordPage, { generateMetadata } from './lowrate-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaLoginKeywordPage />;
}
