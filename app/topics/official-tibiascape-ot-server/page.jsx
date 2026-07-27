import OfficialTibiascapeOtServerKeywordPage, { generateMetadata } from './official-tibiascape-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeOtServerKeywordPage />;
}
