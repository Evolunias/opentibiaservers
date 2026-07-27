import RetroStatusGermanyKeywordPage, { generateMetadata } from './retro-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusGermanyKeywordPage />;
}
