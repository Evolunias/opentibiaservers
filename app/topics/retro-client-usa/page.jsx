import RetroClientUsaKeywordPage, { generateMetadata } from './retro-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroClientUsaKeywordPage />;
}
