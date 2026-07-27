import RetroStatusCanadaKeywordPage, { generateMetadata } from './retro-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusCanadaKeywordPage />;
}
