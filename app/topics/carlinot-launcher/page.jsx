import CarlinotLauncherKeywordPage, { generateMetadata } from './carlinot-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotLauncherKeywordPage />;
}
