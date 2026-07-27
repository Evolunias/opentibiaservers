import Saintsot13SeasonalServerKeywordPage, { generateMetadata } from './saintsot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13SeasonalServerKeywordPage />;
}
