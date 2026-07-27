import NilotBossesKeywordPage, { generateMetadata } from './nilot-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotBossesKeywordPage />;
}
