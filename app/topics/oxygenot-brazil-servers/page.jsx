import OxygenotBrazilServersKeywordPage, { generateMetadata } from './oxygenot-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotBrazilServersKeywordPage />;
}
