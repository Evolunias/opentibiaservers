import OfficialYurotsKeywordPage, { generateMetadata } from './official-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsKeywordPage />;
}
