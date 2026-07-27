import PopularEvoleraKeywordPage, { generateMetadata } from './popular-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraKeywordPage />;
}
