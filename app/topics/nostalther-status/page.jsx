import NostaltherStatusKeywordPage, { generateMetadata } from './nostalther-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherStatusKeywordPage />;
}
