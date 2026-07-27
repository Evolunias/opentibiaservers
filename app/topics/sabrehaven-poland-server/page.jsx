import SabrehavenPolandServerKeywordPage, { generateMetadata } from './sabrehaven-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenPolandServerKeywordPage />;
}
