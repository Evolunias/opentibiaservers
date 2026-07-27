import OfficialYurotsOtKeywordPage, { generateMetadata } from './official-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsOtKeywordPage />;
}
