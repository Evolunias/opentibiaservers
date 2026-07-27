import LowrateAlasteraClientKeywordPage, { generateMetadata } from './lowrate-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraClientKeywordPage />;
}
