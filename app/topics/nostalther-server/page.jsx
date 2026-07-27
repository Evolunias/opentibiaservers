import NostaltherServerKeywordPage, { generateMetadata } from './nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherServerKeywordPage />;
}
