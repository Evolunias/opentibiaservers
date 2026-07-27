import EvoTibiaPrivateServerNorthAmericaKeywordPage, { generateMetadata } from './evo-tibia-private-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiaPrivateServerNorthAmericaKeywordPage />;
}
