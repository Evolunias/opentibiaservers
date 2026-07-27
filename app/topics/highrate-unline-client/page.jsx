import HighrateUnlineClientKeywordPage, { generateMetadata } from './highrate-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineClientKeywordPage />;
}
