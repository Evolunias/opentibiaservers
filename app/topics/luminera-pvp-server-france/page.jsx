import LumineraPvpServerFranceKeywordPage, { generateMetadata } from './luminera-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPvpServerFranceKeywordPage />;
}
