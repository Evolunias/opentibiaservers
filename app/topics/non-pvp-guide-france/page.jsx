import NonPvpGuideFranceKeywordPage, { generateMetadata } from './non-pvp-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGuideFranceKeywordPage />;
}
