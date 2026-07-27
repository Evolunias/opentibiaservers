import OfficialYurotsLoginKeywordPage, { generateMetadata } from './official-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsLoginKeywordPage />;
}
