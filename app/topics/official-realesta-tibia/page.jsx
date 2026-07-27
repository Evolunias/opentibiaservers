import OfficialRealestaTibiaKeywordPage, { generateMetadata } from './official-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaTibiaKeywordPage />;
}
