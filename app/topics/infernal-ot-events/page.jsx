import InfernalOtEventsKeywordPage, { generateMetadata } from './infernal-ot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtEventsKeywordPage />;
}
