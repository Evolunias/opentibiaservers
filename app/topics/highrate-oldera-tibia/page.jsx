import HighrateOlderaTibiaKeywordPage, { generateMetadata } from './highrate-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaTibiaKeywordPage />;
}
