import HighrateYurotsLoginKeywordPage, { generateMetadata } from './highrate-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsLoginKeywordPage />;
}
