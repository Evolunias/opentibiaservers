import LowrateCarlinotTibiaKeywordPage, { generateMetadata } from './lowrate-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotTibiaKeywordPage />;
}
