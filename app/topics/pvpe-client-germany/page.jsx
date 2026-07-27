import PvpeClientGermanyKeywordPage, { generateMetadata } from './pvpe-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClientGermanyKeywordPage />;
}
