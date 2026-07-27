import NonPvpClientFranceKeywordPage, { generateMetadata } from './non-pvp-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpClientFranceKeywordPage />;
}
