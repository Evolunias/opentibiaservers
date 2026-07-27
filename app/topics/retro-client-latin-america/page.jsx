import RetroClientLatinAmericaKeywordPage, { generateMetadata } from './retro-client-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroClientLatinAmericaKeywordPage />;
}
