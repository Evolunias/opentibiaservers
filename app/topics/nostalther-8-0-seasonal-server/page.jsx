import Nostalther80SeasonalServerKeywordPage, { generateMetadata } from './nostalther-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther80SeasonalServerKeywordPage />;
}
