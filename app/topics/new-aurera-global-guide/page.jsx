import NewAureraGlobalGuideKeywordPage, { generateMetadata } from './new-aurera-global-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAureraGlobalGuideKeywordPage />;
}
