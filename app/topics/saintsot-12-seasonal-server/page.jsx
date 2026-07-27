import Saintsot12SeasonalServerKeywordPage, { generateMetadata } from './saintsot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12SeasonalServerKeywordPage />;
}
