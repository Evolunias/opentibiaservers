import ActiveThaisotClientKeywordPage, { generateMetadata } from './active-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotClientKeywordPage />;
}
