import NostaltherBossesKeywordPage, { generateMetadata } from './nostalther-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherBossesKeywordPage />;
}
