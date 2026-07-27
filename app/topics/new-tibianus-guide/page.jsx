import NewTibianusGuideKeywordPage, { generateMetadata } from './new-tibianus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusGuideKeywordPage />;
}
