import PvpEnforcedServersFranceKeywordPage, { generateMetadata } from './pvp-enforced-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServersFranceKeywordPage />;
}
