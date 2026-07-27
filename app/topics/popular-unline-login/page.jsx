import PopularUnlineLoginKeywordPage, { generateMetadata } from './popular-unline-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineLoginKeywordPage />;
}
