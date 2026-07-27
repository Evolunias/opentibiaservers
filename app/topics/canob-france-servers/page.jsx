import CanobFranceServersKeywordPage, { generateMetadata } from './canob-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobFranceServersKeywordPage />;
}
