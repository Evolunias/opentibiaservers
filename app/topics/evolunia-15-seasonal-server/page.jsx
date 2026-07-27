import Evolunia15SeasonalServerKeywordPage, { generateMetadata } from './evolunia-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia15SeasonalServerKeywordPage />;
}
