import NonPvpStatusFranceKeywordPage, { generateMetadata } from './non-pvp-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusFranceKeywordPage />;
}
