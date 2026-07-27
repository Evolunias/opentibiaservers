import OxygenotFranceServersKeywordPage, { generateMetadata } from './oxygenot-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotFranceServersKeywordPage />;
}
