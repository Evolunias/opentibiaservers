import ThaisotRetroServerSwedenKeywordPage, { generateMetadata } from './thaisot-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotRetroServerSwedenKeywordPage />;
}
