import CurrentAmeriaOtKeywordPage, { generateMetadata } from './current-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaOtKeywordPage />;
}
