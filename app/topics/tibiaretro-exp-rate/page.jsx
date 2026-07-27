import TibiaretroExpRateKeywordPage, { generateMetadata } from './tibiaretro-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroExpRateKeywordPage />;
}
