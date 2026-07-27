import RetroStatusPolandKeywordPage, { generateMetadata } from './retro-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusPolandKeywordPage />;
}
