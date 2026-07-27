import OfficialTibijkaOtServerKeywordPage, { generateMetadata } from './official-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaOtServerKeywordPage />;
}
