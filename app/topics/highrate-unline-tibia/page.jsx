import HighrateUnlineTibiaKeywordPage, { generateMetadata } from './highrate-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineTibiaKeywordPage />;
}
