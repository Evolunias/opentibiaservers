import CurrentXanteriaGuideKeywordPage, { generateMetadata } from './current-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaGuideKeywordPage />;
}
