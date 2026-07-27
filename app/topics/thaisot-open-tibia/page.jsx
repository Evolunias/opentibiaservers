import ThaisotOpenTibiaKeywordPage, { generateMetadata } from './thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotOpenTibiaKeywordPage />;
}
