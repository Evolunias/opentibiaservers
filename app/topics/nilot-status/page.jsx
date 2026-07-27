import NilotStatusKeywordPage, { generateMetadata } from './nilot-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotStatusKeywordPage />;
}
