import EternalOdysseyPvpKeywordPage, { generateMetadata } from './eternal-odyssey-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyPvpKeywordPage />;
}
