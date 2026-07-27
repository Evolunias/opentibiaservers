import LowrateXanteriaLoginKeywordPage, { generateMetadata } from './lowrate-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaLoginKeywordPage />;
}
