import EvoTibiaPrivateServerLatinAmericaKeywordPage, { generateMetadata } from './evo-tibia-private-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiaPrivateServerLatinAmericaKeywordPage />;
}
