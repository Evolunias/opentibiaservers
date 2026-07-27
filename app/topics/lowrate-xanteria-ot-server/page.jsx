import LowrateXanteriaOtServerKeywordPage, { generateMetadata } from './lowrate-xanteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaOtServerKeywordPage />;
}
