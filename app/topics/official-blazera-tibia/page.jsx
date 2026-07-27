import OfficialBlazeraTibiaKeywordPage, { generateMetadata } from './official-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraTibiaKeywordPage />;
}
