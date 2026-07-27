import LowrateNostaltherKeywordPage, { generateMetadata } from './lowrate-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherKeywordPage />;
}
