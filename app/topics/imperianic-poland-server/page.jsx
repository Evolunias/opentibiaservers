import ImperianicPolandServerKeywordPage, { generateMetadata } from './imperianic-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicPolandServerKeywordPage />;
}
