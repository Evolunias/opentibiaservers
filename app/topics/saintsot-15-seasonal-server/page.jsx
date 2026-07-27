import Saintsot15SeasonalServerKeywordPage, { generateMetadata } from './saintsot-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot15SeasonalServerKeywordPage />;
}
