import TopUnlineLoginKeywordPage, { generateMetadata } from './top-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineLoginKeywordPage />;
}
