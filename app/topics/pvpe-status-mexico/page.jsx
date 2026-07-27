import PvpeStatusMexicoKeywordPage, { generateMetadata } from './pvpe-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusMexicoKeywordPage />;
}
