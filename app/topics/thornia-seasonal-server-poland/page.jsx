import ThorniaSeasonalServerPolandKeywordPage, { generateMetadata } from './thornia-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaSeasonalServerPolandKeywordPage />;
}
