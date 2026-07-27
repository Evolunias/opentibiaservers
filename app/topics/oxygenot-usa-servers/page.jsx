import OxygenotUsaServersKeywordPage, { generateMetadata } from './oxygenot-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotUsaServersKeywordPage />;
}
