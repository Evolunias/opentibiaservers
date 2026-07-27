import OfficialYurotsServerKeywordPage, { generateMetadata } from './official-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsServerKeywordPage />;
}
