import HighrateUnlineLoginKeywordPage, { generateMetadata } from './highrate-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineLoginKeywordPage />;
}
