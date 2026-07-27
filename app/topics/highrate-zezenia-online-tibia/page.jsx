import HighrateZezeniaOnlineTibiaKeywordPage, { generateMetadata } from './highrate-zezenia-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZezeniaOnlineTibiaKeywordPage />;
}
