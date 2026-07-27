import HighrateCarlinotTibiaKeywordPage, { generateMetadata } from './highrate-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotTibiaKeywordPage />;
}
