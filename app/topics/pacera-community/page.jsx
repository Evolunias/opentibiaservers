import PaceraCommunityKeywordPage, { generateMetadata } from './pacera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraCommunityKeywordPage />;
}
