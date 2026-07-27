import LowrateAmeriaServerKeywordPage, { generateMetadata } from './lowrate-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaServerKeywordPage />;
}
