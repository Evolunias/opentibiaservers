import EternalOdysseyUsaServerKeywordPage, { generateMetadata } from './eternal-odyssey-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyUsaServerKeywordPage />;
}
