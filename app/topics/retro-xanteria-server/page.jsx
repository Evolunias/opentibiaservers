import RetroXanteriaServerKeywordPage, { generateMetadata } from './retro-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroXanteriaServerKeywordPage />;
}
