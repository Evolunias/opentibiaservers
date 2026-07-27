import OfficialOlderaTibiaKeywordPage, { generateMetadata } from './official-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaTibiaKeywordPage />;
}
