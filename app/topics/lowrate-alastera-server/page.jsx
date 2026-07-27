import LowrateAlasteraServerKeywordPage, { generateMetadata } from './lowrate-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraServerKeywordPage />;
}
