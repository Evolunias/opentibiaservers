import NostaltherArgentinaServerKeywordPage, { generateMetadata } from './nostalther-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherArgentinaServerKeywordPage />;
}
