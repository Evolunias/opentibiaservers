import HighrateElderaOtServerKeywordPage, { generateMetadata } from './highrate-eldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaOtServerKeywordPage />;
}
