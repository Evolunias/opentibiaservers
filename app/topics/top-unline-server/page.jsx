import TopUnlineServerKeywordPage, { generateMetadata } from './top-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineServerKeywordPage />;
}
