import OfficialElderaTibiaKeywordPage, { generateMetadata } from './official-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaTibiaKeywordPage />;
}
