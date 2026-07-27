import NeranaWarsKeywordPage, { generateMetadata } from './nerana-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaWarsKeywordPage />;
}
