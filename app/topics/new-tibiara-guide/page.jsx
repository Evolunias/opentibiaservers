import NewTibiaraGuideKeywordPage, { generateMetadata } from './new-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraGuideKeywordPage />;
}
