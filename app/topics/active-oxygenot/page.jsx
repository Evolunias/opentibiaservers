import ActiveOxygenotKeywordPage, { generateMetadata } from './active-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotKeywordPage />;
}
