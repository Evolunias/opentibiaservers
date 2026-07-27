import OfficialNepreniaTibiaKeywordPage, { generateMetadata } from './official-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaTibiaKeywordPage />;
}
