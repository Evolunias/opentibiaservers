import KoliseuotLegacyPage, { generateMetadata } from './koliseuot-legacy';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KoliseuotLegacyPage />;
}
