import OfficialClassickDrakoriaOtKeywordPage, { generateMetadata } from './official-classick-drakoria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassickDrakoriaOtKeywordPage />;
}
