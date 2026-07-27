import EvoServersFranceKeywordPage, { generateMetadata } from './evo-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServersFranceKeywordPage />;
}
