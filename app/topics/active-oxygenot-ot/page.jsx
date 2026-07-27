import ActiveOxygenotOtKeywordPage, { generateMetadata } from './active-oxygenot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotOtKeywordPage />;
}
