import LowrateThorniaTibiaKeywordPage, { generateMetadata } from './lowrate-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaTibiaKeywordPage />;
}
