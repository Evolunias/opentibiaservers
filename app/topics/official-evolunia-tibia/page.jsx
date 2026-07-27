import OfficialEvoluniaTibiaKeywordPage, { generateMetadata } from './official-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaTibiaKeywordPage />;
}
