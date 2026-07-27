import Nostalther12SeasonalServerKeywordPage, { generateMetadata } from './nostalther-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther12SeasonalServerKeywordPage />;
}
