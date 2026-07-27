import PopularUnlineClientKeywordPage, { generateMetadata } from './popular-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineClientKeywordPage />;
}
