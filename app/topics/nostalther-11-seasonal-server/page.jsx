import Nostalther11SeasonalServerKeywordPage, { generateMetadata } from './nostalther-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther11SeasonalServerKeywordPage />;
}
