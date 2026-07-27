import LowrateAlasteraOtKeywordPage, { generateMetadata } from './lowrate-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraOtKeywordPage />;
}
