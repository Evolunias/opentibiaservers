import PopularUnlineServerKeywordPage, { generateMetadata } from './popular-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineServerKeywordPage />;
}
