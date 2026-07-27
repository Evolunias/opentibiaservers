import LowrateRealeraClientKeywordPage, { generateMetadata } from './lowrate-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealeraClientKeywordPage />;
}
