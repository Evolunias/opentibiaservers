import CurrentAmeriaClientKeywordPage, { generateMetadata } from './current-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaClientKeywordPage />;
}
