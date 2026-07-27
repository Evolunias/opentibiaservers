import PvpeStatusBrazilKeywordPage, { generateMetadata } from './pvpe-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusBrazilKeywordPage />;
}
