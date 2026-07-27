import CurrentAmeriaKeywordPage, { generateMetadata } from './current-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaKeywordPage />;
}
