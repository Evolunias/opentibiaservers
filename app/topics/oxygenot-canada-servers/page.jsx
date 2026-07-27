import OxygenotCanadaServersKeywordPage, { generateMetadata } from './oxygenot-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotCanadaServersKeywordPage />;
}
