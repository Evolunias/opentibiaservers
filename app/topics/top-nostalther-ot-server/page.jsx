import TopNostaltherOtServerKeywordPage, { generateMetadata } from './top-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherOtServerKeywordPage />;
}
