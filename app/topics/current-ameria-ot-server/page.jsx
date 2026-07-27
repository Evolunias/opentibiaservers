import CurrentAmeriaOtServerKeywordPage, { generateMetadata } from './current-ameria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaOtServerKeywordPage />;
}
