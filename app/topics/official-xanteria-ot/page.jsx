import OfficialXanteriaOtKeywordPage, { generateMetadata } from './official-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaOtKeywordPage />;
}
