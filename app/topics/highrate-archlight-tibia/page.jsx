import HighrateArchlightTibiaKeywordPage, { generateMetadata } from './highrate-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightTibiaKeywordPage />;
}
