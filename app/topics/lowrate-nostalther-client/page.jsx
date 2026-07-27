import LowrateNostaltherClientKeywordPage, { generateMetadata } from './lowrate-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherClientKeywordPage />;
}
