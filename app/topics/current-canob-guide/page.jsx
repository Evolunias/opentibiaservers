import CurrentCanobGuideKeywordPage, { generateMetadata } from './current-canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobGuideKeywordPage />;
}
