import DuraOnlineBossesKeywordPage, { generateMetadata } from './dura-online-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineBossesKeywordPage />;
}
