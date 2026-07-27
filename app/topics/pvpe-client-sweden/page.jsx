import PvpeClientSwedenKeywordPage, { generateMetadata } from './pvpe-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClientSwedenKeywordPage />;
}
