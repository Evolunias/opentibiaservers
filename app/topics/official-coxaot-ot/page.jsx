import OfficialCoxaotOtKeywordPage, { generateMetadata } from './official-coxaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotOtKeywordPage />;
}
