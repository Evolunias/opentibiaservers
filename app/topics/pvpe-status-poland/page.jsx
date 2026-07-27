import PvpeStatusPolandKeywordPage, { generateMetadata } from './pvpe-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusPolandKeywordPage />;
}
