import NostaltherPolandServersKeywordPage, { generateMetadata } from './nostalther-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherPolandServersKeywordPage />;
}
