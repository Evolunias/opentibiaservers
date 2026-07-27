import ThaisotRetroServerSouthAmericaKeywordPage, { generateMetadata } from './thaisot-retro-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotRetroServerSouthAmericaKeywordPage />;
}
