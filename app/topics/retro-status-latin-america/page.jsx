import RetroStatusLatinAmericaKeywordPage, { generateMetadata } from './retro-status-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusLatinAmericaKeywordPage />;
}
