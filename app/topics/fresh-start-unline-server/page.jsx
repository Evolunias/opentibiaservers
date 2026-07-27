import FreshStartUnlineServerKeywordPage, { generateMetadata } from './fresh-start-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineServerKeywordPage />;
}
