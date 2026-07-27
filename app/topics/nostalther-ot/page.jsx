import NostaltherOtKeywordPage, { generateMetadata } from './nostalther-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherOtKeywordPage />;
}
