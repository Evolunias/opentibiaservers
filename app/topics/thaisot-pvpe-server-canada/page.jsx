import ThaisotPvpeServerCanadaKeywordPage, { generateMetadata } from './thaisot-pvpe-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotPvpeServerCanadaKeywordPage />;
}
