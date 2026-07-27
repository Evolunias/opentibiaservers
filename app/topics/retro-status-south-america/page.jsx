import RetroStatusSouthAmericaKeywordPage, { generateMetadata } from './retro-status-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusSouthAmericaKeywordPage />;
}
