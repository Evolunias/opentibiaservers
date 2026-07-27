import ActiveInfernalOtWebsiteKeywordPage, { generateMetadata } from './active-infernal-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveInfernalOtWebsiteKeywordPage />;
}
