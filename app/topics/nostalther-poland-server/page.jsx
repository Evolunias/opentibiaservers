import NostaltherPolandServerKeywordPage, { generateMetadata } from './nostalther-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherPolandServerKeywordPage />;
}
