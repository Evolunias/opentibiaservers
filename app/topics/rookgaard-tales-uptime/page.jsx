import RookgaardTalesUptimeKeywordPage, { generateMetadata } from './rookgaard-tales-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesUptimeKeywordPage />;
}
