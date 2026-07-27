import ActiveThaisotServerKeywordPage, { generateMetadata } from './active-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotServerKeywordPage />;
}
