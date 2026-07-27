import NewThorniaGuideKeywordPage, { generateMetadata } from './new-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaGuideKeywordPage />;
}
