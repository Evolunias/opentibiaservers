import CurrentAmeriaLoginKeywordPage, { generateMetadata } from './current-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaLoginKeywordPage />;
}
