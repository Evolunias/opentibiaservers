import OxygenotSeasonalServerUsaKeywordPage, { generateMetadata } from './oxygenot-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotSeasonalServerUsaKeywordPage />;
}
