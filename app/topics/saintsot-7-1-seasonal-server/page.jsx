import Saintsot71SeasonalServerKeywordPage, { generateMetadata } from './saintsot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot71SeasonalServerKeywordPage />;
}
