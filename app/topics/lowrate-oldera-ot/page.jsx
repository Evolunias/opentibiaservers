import LowrateOlderaOtKeywordPage, { generateMetadata } from './lowrate-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaOtKeywordPage />;
}
