import LowrateKasteriaServerKeywordPage, { generateMetadata } from './lowrate-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaServerKeywordPage />;
}
