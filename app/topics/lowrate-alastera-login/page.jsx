import LowrateAlasteraLoginKeywordPage, { generateMetadata } from './lowrate-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraLoginKeywordPage />;
}
