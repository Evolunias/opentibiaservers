import OfficialTibijkaOtKeywordPage, { generateMetadata } from './official-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaOtKeywordPage />;
}
