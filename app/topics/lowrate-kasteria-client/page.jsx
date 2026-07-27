import LowrateKasteriaClientKeywordPage, { generateMetadata } from './lowrate-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaClientKeywordPage />;
}
