import PopularUnlineOfficialKeywordPage, { generateMetadata } from './popular-unline-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineOfficialKeywordPage />;
}
