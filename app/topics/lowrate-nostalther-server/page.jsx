import LowrateNostaltherServerKeywordPage, { generateMetadata } from './lowrate-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherServerKeywordPage />;
}
