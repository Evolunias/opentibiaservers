import CoxaotEventsKeywordPage, { generateMetadata } from './coxaot-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotEventsKeywordPage />;
}
