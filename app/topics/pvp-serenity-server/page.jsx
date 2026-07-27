import PvpSerenityServerKeywordPage, { generateMetadata } from './pvp-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSerenityServerKeywordPage />;
}
