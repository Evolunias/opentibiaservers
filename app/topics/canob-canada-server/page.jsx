import CanobCanadaServerKeywordPage, { generateMetadata } from './canob-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobCanadaServerKeywordPage />;
}
