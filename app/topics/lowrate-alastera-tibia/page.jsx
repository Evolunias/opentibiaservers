import LowrateAlasteraTibiaKeywordPage, { generateMetadata } from './lowrate-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraTibiaKeywordPage />;
}
