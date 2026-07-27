import Madnessalive15SeasonalServerKeywordPage, { generateMetadata } from './madnessalive-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Madnessalive15SeasonalServerKeywordPage />;
}
