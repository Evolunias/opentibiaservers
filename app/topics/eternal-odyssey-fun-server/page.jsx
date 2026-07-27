import EternalOdysseyFunServerKeywordPage, { generateMetadata } from './eternal-odyssey-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyFunServerKeywordPage />;
}
