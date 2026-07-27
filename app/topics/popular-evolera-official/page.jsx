import PopularEvoleraOfficialKeywordPage, { generateMetadata } from './popular-evolera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraOfficialKeywordPage />;
}
