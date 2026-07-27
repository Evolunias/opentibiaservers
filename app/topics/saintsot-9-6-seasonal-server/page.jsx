import Saintsot96SeasonalServerKeywordPage, { generateMetadata } from './saintsot-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot96SeasonalServerKeywordPage />;
}
