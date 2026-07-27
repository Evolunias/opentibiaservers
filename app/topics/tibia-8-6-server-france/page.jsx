import Tibia86ServerFranceKeywordPage, { generateMetadata } from './tibia-8-6-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerFranceKeywordPage />;
}
