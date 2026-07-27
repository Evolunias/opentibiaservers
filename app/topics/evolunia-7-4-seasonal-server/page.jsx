import Evolunia74SeasonalServerKeywordPage, { generateMetadata } from './evolunia-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia74SeasonalServerKeywordPage />;
}
