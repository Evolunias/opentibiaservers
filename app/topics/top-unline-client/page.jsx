import TopUnlineClientKeywordPage, { generateMetadata } from './top-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineClientKeywordPage />;
}
