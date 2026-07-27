import ThaisotPvpeKeywordPage, { generateMetadata } from './thaisot-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotPvpeKeywordPage />;
}
