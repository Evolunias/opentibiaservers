import LowrateXanteriaOtsKeywordPage, { generateMetadata } from './lowrate-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaOtsKeywordPage />;
}
