import CarlinotScreenshotsKeywordPage, { generateMetadata } from './carlinot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotScreenshotsKeywordPage />;
}
