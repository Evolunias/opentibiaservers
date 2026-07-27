import OfficialAlasteraTibiaKeywordPage, { generateMetadata } from './official-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraTibiaKeywordPage />;
}
