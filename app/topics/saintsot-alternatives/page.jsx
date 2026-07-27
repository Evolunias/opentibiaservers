import SaintsotAlternativesKeywordPage, { generateMetadata } from './saintsot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotAlternativesKeywordPage />;
}
