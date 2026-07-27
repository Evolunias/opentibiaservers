import NilotSwedenServerKeywordPage, { generateMetadata } from './nilot-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotSwedenServerKeywordPage />;
}
