import LowrateAlasteraOtServerKeywordPage, { generateMetadata } from './lowrate-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraOtServerKeywordPage />;
}
