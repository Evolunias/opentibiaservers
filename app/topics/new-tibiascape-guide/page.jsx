import NewTibiascapeGuideKeywordPage, { generateMetadata } from './new-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeGuideKeywordPage />;
}
