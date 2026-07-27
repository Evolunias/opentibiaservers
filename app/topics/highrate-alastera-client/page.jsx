import HighrateAlasteraClientKeywordPage, { generateMetadata } from './highrate-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraClientKeywordPage />;
}
