import NostaltherOtsKeywordPage, { generateMetadata } from './nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherOtsKeywordPage />;
}
