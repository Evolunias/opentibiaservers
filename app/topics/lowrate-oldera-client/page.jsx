import LowrateOlderaClientKeywordPage, { generateMetadata } from './lowrate-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaClientKeywordPage />;
}
