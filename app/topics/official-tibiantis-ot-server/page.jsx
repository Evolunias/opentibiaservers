import OfficialTibiantisOtServerKeywordPage, { generateMetadata } from './official-tibiantis-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisOtServerKeywordPage />;
}
