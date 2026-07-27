import OfficialRuthlessChaosTibiaKeywordPage, { generateMetadata } from './official-ruthless-chaos-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosTibiaKeywordPage />;
}
