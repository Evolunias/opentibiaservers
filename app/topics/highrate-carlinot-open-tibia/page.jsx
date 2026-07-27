import HighrateCarlinotOpenTibiaKeywordPage, { generateMetadata } from './highrate-carlinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotOpenTibiaKeywordPage />;
}
