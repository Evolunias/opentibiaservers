import NostaltherUsaServersKeywordPage, { generateMetadata } from './nostalther-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherUsaServersKeywordPage />;
}
