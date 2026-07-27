import CurrentAmeriaOfficialKeywordPage, { generateMetadata } from './current-ameria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaOfficialKeywordPage />;
}
