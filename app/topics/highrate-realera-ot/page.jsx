import HighrateRealeraOtKeywordPage, { generateMetadata } from './highrate-realera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraOtKeywordPage />;
}
