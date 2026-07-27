import CeleniumRubinotPage, { generateMetadata } from './celenium-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CeleniumRubinotPage />;
}
