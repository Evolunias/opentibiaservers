import LowrateNepreniaTibiaKeywordPage, { generateMetadata } from './lowrate-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaTibiaKeywordPage />;
}
