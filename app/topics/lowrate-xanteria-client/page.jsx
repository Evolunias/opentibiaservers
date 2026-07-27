import LowrateXanteriaClientKeywordPage, { generateMetadata } from './lowrate-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaClientKeywordPage />;
}
