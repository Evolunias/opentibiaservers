import ThaisotChileServerKeywordPage, { generateMetadata } from './thaisot-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotChileServerKeywordPage />;
}
