import ActiveThaisotLoginKeywordPage, { generateMetadata } from './active-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotLoginKeywordPage />;
}
