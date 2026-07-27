import RetroStatusNorthAmericaKeywordPage, { generateMetadata } from './retro-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusNorthAmericaKeywordPage />;
}
