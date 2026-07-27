import LowrateAlasteraKeywordPage, { generateMetadata } from './lowrate-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraKeywordPage />;
}
