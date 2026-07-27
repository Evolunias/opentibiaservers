import HighrateAlasteraTibiaKeywordPage, { generateMetadata } from './highrate-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraTibiaKeywordPage />;
}
