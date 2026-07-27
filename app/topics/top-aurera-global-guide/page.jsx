import TopAureraGlobalGuideKeywordPage, { generateMetadata } from './top-aurera-global-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAureraGlobalGuideKeywordPage />;
}
