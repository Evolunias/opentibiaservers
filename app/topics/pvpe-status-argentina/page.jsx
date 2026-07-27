import PvpeStatusArgentinaKeywordPage, { generateMetadata } from './pvpe-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusArgentinaKeywordPage />;
}
