import CurrentCoxaotGuideKeywordPage, { generateMetadata } from './current-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotGuideKeywordPage />;
}
