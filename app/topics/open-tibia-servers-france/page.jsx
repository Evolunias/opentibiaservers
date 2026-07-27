import OpenTibiaServersFranceKeywordPage, { generateMetadata } from './open-tibia-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersFranceKeywordPage />;
}
