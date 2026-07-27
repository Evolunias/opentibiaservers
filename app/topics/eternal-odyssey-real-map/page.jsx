import EternalOdysseyRealMapKeywordPage, { generateMetadata } from './eternal-odyssey-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyRealMapKeywordPage />;
}
