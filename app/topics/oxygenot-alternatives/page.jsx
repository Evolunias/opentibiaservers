import OxygenotAlternativesKeywordPage, { generateMetadata } from './oxygenot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotAlternativesKeywordPage />;
}
