import NewEternalOdysseyGuideKeywordPage, { generateMetadata } from './new-eternal-odyssey-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEternalOdysseyGuideKeywordPage />;
}
