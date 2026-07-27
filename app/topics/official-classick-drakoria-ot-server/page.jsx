import OfficialClassickDrakoriaOtServerKeywordPage, { generateMetadata } from './official-classick-drakoria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassickDrakoriaOtServerKeywordPage />;
}
