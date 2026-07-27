import NostaltherArgentinaServersKeywordPage, { generateMetadata } from './nostalther-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherArgentinaServersKeywordPage />;
}
