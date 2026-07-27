import HighrateSaintsotServerKeywordPage, { generateMetadata } from './highrate-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotServerKeywordPage />;
}
