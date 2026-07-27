import Nostalther13SeasonalServerKeywordPage, { generateMetadata } from './nostalther-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther13SeasonalServerKeywordPage />;
}
