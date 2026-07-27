import OfficialYurotsOtServerKeywordPage, { generateMetadata } from './official-yurots-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsOtServerKeywordPage />;
}
