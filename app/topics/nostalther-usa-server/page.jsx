import NostaltherUsaServerKeywordPage, { generateMetadata } from './nostalther-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherUsaServerKeywordPage />;
}
