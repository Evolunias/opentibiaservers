import NostaltherEuropeServersKeywordPage, { generateMetadata } from './nostalther-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherEuropeServersKeywordPage />;
}
