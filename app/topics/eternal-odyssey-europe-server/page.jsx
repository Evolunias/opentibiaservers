import EternalOdysseyEuropeServerKeywordPage, { generateMetadata } from './eternal-odyssey-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyEuropeServerKeywordPage />;
}
