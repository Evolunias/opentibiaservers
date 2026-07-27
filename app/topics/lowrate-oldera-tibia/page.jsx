import LowrateOlderaTibiaKeywordPage, { generateMetadata } from './lowrate-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaTibiaKeywordPage />;
}
