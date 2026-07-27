import PvpeStatusUsaKeywordPage, { generateMetadata } from './pvpe-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusUsaKeywordPage />;
}
