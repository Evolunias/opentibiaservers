import EternalOdysseyUkServerKeywordPage, { generateMetadata } from './eternal-odyssey-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyUkServerKeywordPage />;
}
