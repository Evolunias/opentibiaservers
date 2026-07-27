import EternalOdysseyOtsKeywordPage, { generateMetadata } from './eternal-odyssey-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyOtsKeywordPage />;
}
