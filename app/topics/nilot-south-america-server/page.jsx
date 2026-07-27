import NilotSouthAmericaServerKeywordPage, { generateMetadata } from './nilot-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotSouthAmericaServerKeywordPage />;
}
