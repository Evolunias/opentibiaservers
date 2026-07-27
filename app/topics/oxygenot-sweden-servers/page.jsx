import OxygenotSwedenServersKeywordPage, { generateMetadata } from './oxygenot-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotSwedenServersKeywordPage />;
}
