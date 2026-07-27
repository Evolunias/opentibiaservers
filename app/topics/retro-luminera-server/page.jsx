import RetroLumineraServerKeywordPage, { generateMetadata } from './retro-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroLumineraServerKeywordPage />;
}
