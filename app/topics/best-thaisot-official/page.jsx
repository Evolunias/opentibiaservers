import BestThaisotOfficialKeywordPage, { generateMetadata } from './best-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotOfficialKeywordPage />;
}
