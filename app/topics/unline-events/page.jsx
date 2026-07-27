import UnlineEventsKeywordPage, { generateMetadata } from './unline-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineEventsKeywordPage />;
}
