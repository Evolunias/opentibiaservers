import OxygenotPolandServerKeywordPage, { generateMetadata } from './oxygenot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotPolandServerKeywordPage />;
}
