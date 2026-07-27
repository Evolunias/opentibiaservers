import RetroStatusUsaKeywordPage, { generateMetadata } from './retro-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusUsaKeywordPage />;
}
