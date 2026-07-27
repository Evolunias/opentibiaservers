import DuraOnlinePvpServerUkKeywordPage, { generateMetadata } from './dura-online-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlinePvpServerUkKeywordPage />;
}
