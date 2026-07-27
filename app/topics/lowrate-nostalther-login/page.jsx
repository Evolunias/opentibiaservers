import LowrateNostaltherLoginKeywordPage, { generateMetadata } from './lowrate-nostalther-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherLoginKeywordPage />;
}
