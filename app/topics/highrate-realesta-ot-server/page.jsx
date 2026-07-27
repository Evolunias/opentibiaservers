import HighrateRealestaOtServerKeywordPage, { generateMetadata } from './highrate-realesta-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaOtServerKeywordPage />;
}
