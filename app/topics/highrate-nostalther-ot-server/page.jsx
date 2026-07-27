import HighrateNostaltherOtServerKeywordPage, { generateMetadata } from './highrate-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherOtServerKeywordPage />;
}
