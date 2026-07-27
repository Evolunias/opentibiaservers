import HighrateYurotsOtKeywordPage, { generateMetadata } from './highrate-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsOtKeywordPage />;
}
