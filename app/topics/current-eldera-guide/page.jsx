import CurrentElderaGuideKeywordPage, { generateMetadata } from './current-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaGuideKeywordPage />;
}
