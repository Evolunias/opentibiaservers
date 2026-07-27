import LowrateImperianicLoginKeywordPage, { generateMetadata } from './lowrate-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicLoginKeywordPage />;
}
