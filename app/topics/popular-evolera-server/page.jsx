import PopularEvoleraServerKeywordPage, { generateMetadata } from './popular-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraServerKeywordPage />;
}
