import RuthlessChaos15SeasonalServerKeywordPage, { generateMetadata } from './ruthless-chaos-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaos15SeasonalServerKeywordPage />;
}
