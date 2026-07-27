import EmpirebrEventsKeywordPage, { generateMetadata } from './empirebr-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrEventsKeywordPage />;
}
