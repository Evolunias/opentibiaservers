import BestAmeriaOfficialKeywordPage, { generateMetadata } from './best-ameria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaOfficialKeywordPage />;
}
