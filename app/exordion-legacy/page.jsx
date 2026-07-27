import ExordionLegacyPage, { generateMetadata } from './exordion-legacy';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ExordionLegacyPage />;
}
