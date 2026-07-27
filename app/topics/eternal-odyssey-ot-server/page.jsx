import EternalOdysseyOtServerKeywordPage, { generateMetadata } from './eternal-odyssey-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyOtServerKeywordPage />;
}
