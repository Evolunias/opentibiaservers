import LowrateCarlinotClientKeywordPage, { generateMetadata } from './lowrate-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotClientKeywordPage />;
}
