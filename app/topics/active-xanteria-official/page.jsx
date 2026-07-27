import ActiveXanteriaOfficialKeywordPage, { generateMetadata } from './active-xanteria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaOfficialKeywordPage />;
}
