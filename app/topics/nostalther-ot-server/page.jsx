import NostaltherOtServerKeywordPage, { generateMetadata } from './nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherOtServerKeywordPage />;
}
