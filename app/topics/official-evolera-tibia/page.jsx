import OfficialEvoleraTibiaKeywordPage, { generateMetadata } from './official-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraTibiaKeywordPage />;
}
