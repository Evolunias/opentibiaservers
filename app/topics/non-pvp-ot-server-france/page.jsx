import NonPvpOtServerFranceKeywordPage, { generateMetadata } from './non-pvp-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerFranceKeywordPage />;
}
