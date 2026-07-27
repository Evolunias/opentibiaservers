import RetroStatusUkKeywordPage, { generateMetadata } from './retro-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusUkKeywordPage />;
}
