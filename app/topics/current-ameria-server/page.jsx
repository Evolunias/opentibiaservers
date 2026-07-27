import CurrentAmeriaServerKeywordPage, { generateMetadata } from './current-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaServerKeywordPage />;
}
