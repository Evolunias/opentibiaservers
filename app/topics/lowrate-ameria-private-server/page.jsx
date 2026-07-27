import LowrateAmeriaPrivateServerKeywordPage, { generateMetadata } from './lowrate-ameria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaPrivateServerKeywordPage />;
}
