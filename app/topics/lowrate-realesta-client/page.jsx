import LowrateRealestaClientKeywordPage, { generateMetadata } from './lowrate-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaClientKeywordPage />;
}
