import LowrateCarlinotKeywordPage, { generateMetadata } from './lowrate-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotKeywordPage />;
}
