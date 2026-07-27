import NostaltherChileServerKeywordPage, { generateMetadata } from './nostalther-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherChileServerKeywordPage />;
}
