import EternalOdysseyWarsKeywordPage, { generateMetadata } from './eternal-odyssey-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyWarsKeywordPage />;
}
