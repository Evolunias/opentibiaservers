import LowrateKasteriaLoginKeywordPage, { generateMetadata } from './lowrate-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaLoginKeywordPage />;
}
