import LowrateThaisotServerKeywordPage, { generateMetadata } from './lowrate-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotServerKeywordPage />;
}
