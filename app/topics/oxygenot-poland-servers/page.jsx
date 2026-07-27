import OxygenotPolandServersKeywordPage, { generateMetadata } from './oxygenot-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotPolandServersKeywordPage />;
}
