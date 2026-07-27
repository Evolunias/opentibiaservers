import TenebriumRubinotPage, { generateMetadata } from './tenebrium-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TenebriumRubinotPage />;
}
