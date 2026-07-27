import CurrentImperianicGuideKeywordPage, { generateMetadata } from './current-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicGuideKeywordPage />;
}
