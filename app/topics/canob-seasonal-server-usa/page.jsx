import CanobSeasonalServerUsaKeywordPage, { generateMetadata } from './canob-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSeasonalServerUsaKeywordPage />;
}
