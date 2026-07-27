import NostaltherPvpKeywordPage, { generateMetadata } from './nostalther-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherPvpKeywordPage />;
}
