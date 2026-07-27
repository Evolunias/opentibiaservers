import HighrateCarlinotClientKeywordPage, { generateMetadata } from './highrate-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotClientKeywordPage />;
}
