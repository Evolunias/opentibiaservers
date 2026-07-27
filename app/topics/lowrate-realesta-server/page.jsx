import LowrateRealestaServerKeywordPage, { generateMetadata } from './lowrate-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaServerKeywordPage />;
}
