import PvpServersFranceKeywordPage, { generateMetadata } from './pvp-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersFranceKeywordPage />;
}
