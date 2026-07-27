import CustomXanteriaOfficialKeywordPage, { generateMetadata } from './custom-xanteria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaOfficialKeywordPage />;
}
