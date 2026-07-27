import NostaltherEuropeServerKeywordPage, { generateMetadata } from './nostalther-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherEuropeServerKeywordPage />;
}
