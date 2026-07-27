import RetroSerenityServerKeywordPage, { generateMetadata } from './retro-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSerenityServerKeywordPage />;
}
