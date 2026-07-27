import RetroServersLatinAmericaKeywordPage, { generateMetadata } from './retro-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServersLatinAmericaKeywordPage />;
}
