import OfficialAureraGlobalOtServerKeywordPage, { generateMetadata } from './official-aurera-global-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAureraGlobalOtServerKeywordPage />;
}
