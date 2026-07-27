import LowrateRealestaOtKeywordPage, { generateMetadata } from './lowrate-realesta-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaOtKeywordPage />;
}
