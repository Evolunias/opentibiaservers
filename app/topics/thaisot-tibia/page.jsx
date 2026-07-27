import ThaisotTibiaKeywordPage, { generateMetadata } from './thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotTibiaKeywordPage />;
}
