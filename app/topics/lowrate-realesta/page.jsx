import LowrateRealestaKeywordPage, { generateMetadata } from './lowrate-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaKeywordPage />;
}
