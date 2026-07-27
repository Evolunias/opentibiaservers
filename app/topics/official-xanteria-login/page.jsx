import OfficialXanteriaLoginKeywordPage, { generateMetadata } from './official-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaLoginKeywordPage />;
}
