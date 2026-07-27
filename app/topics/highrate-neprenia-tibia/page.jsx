import HighrateNepreniaTibiaKeywordPage, { generateMetadata } from './highrate-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaTibiaKeywordPage />;
}
