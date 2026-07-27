import OlderaOfficialKeywordPage, { generateMetadata } from './oldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaOfficialKeywordPage />;
}
