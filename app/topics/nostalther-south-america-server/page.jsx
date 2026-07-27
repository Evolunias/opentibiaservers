import NostaltherSouthAmericaServerKeywordPage, { generateMetadata } from './nostalther-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherSouthAmericaServerKeywordPage />;
}
