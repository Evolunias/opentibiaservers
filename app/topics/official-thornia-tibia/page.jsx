import OfficialThorniaTibiaKeywordPage, { generateMetadata } from './official-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaTibiaKeywordPage />;
}
