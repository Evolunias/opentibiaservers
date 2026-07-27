import NostaltherSwedenServerKeywordPage, { generateMetadata } from './nostalther-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherSwedenServerKeywordPage />;
}
