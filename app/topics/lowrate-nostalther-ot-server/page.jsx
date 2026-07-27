import LowrateNostaltherOtServerKeywordPage, { generateMetadata } from './lowrate-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherOtServerKeywordPage />;
}
