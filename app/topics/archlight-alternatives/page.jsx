import ArchlightAlternativesKeywordPage, { generateMetadata } from './archlight-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightAlternativesKeywordPage />;
}
