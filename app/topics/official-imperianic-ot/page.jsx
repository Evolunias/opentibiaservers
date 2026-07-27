import OfficialImperianicOtKeywordPage, { generateMetadata } from './official-imperianic-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicOtKeywordPage />;
}
