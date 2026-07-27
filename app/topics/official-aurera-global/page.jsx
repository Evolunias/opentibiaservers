import OfficialAureraGlobalKeywordPage, { generateMetadata } from './official-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAureraGlobalKeywordPage />;
}
