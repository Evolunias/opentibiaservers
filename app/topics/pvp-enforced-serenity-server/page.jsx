import PvpEnforcedSerenityServerKeywordPage, { generateMetadata } from './pvp-enforced-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSerenityServerKeywordPage />;
}
