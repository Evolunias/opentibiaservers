import NostaltherBrazilServerKeywordPage, { generateMetadata } from './nostalther-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherBrazilServerKeywordPage />;
}
