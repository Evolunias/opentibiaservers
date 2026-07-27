import LowrateElderaOtKeywordPage, { generateMetadata } from './lowrate-eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaOtKeywordPage />;
}
