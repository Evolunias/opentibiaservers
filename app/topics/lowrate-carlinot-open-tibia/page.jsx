import LowrateCarlinotOpenTibiaKeywordPage, { generateMetadata } from './lowrate-carlinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotOpenTibiaKeywordPage />;
}
