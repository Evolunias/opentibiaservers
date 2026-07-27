import OfficialXanteriaServerKeywordPage, { generateMetadata } from './official-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaServerKeywordPage />;
}
