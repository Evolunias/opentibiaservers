import DuraOnlineWarsKeywordPage, { generateMetadata } from './dura-online-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineWarsKeywordPage />;
}
