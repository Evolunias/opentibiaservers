import LowrateXanteriaPrivateServerKeywordPage, { generateMetadata } from './lowrate-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaPrivateServerKeywordPage />;
}
