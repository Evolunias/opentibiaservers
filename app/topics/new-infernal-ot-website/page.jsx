import NewInfernalOtWebsiteKeywordPage, { generateMetadata } from './new-infernal-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewInfernalOtWebsiteKeywordPage />;
}
