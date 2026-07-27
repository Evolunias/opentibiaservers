import LowrateNostaltherOtsKeywordPage, { generateMetadata } from './lowrate-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherOtsKeywordPage />;
}
