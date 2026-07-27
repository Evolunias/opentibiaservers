import ActiveThaisotOtKeywordPage, { generateMetadata } from './active-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotOtKeywordPage />;
}
