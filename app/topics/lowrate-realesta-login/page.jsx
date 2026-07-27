import LowrateRealestaLoginKeywordPage, { generateMetadata } from './lowrate-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaLoginKeywordPage />;
}
