import OfficialRealeraOtKeywordPage, { generateMetadata } from './official-realera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraOtKeywordPage />;
}
