import NewXanteriaOfficialKeywordPage, { generateMetadata } from './new-xanteria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaOfficialKeywordPage />;
}
