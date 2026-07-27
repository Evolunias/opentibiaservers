import OfficialYurotsClientKeywordPage, { generateMetadata } from './official-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsClientKeywordPage />;
}
