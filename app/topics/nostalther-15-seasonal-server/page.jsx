import Nostalther15SeasonalServerKeywordPage, { generateMetadata } from './nostalther-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther15SeasonalServerKeywordPage />;
}
