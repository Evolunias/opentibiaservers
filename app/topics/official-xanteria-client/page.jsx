import OfficialXanteriaClientKeywordPage, { generateMetadata } from './official-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaClientKeywordPage />;
}
