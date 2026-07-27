import DuraOnlineFranceServersKeywordPage, { generateMetadata } from './dura-online-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineFranceServersKeywordPage />;
}
