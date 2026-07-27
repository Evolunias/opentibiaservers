import HighrateRealestaOtKeywordPage, { generateMetadata } from './highrate-realesta-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaOtKeywordPage />;
}
