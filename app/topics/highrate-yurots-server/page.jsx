import HighrateYurotsServerKeywordPage, { generateMetadata } from './highrate-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsServerKeywordPage />;
}
