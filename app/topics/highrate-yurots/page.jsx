import HighrateYurotsKeywordPage, { generateMetadata } from './highrate-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsKeywordPage />;
}
