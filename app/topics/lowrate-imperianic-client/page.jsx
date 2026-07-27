import LowrateImperianicClientKeywordPage, { generateMetadata } from './lowrate-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicClientKeywordPage />;
}
