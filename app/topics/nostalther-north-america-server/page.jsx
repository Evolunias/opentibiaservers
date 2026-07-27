import NostaltherNorthAmericaServerKeywordPage, { generateMetadata } from './nostalther-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherNorthAmericaServerKeywordPage />;
}
