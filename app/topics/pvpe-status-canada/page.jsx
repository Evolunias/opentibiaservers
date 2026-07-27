import PvpeStatusCanadaKeywordPage, { generateMetadata } from './pvpe-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusCanadaKeywordPage />;
}
