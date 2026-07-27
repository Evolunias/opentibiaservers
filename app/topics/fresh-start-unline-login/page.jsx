import FreshStartUnlineLoginKeywordPage, { generateMetadata } from './fresh-start-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineLoginKeywordPage />;
}
