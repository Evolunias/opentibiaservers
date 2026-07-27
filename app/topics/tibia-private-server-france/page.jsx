import TibiaPrivateServerFranceKeywordPage, { generateMetadata } from './tibia-private-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerFranceKeywordPage />;
}
