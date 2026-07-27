import NostaltherKeywordPage, { generateMetadata } from './nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherKeywordPage />;
}
