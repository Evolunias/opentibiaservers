import OfficialAureraGlobalOtKeywordPage, { generateMetadata } from './official-aurera-global-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAureraGlobalOtKeywordPage />;
}
