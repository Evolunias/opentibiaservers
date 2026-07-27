import LowrateImperianicServerKeywordPage, { generateMetadata } from './lowrate-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicServerKeywordPage />;
}
