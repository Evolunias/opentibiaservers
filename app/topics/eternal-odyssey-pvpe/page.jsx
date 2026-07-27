import EternalOdysseyPvpeKeywordPage, { generateMetadata } from './eternal-odyssey-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyPvpeKeywordPage />;
}
