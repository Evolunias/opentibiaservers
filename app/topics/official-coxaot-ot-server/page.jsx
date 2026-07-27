import OfficialCoxaotOtServerKeywordPage, { generateMetadata } from './official-coxaot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotOtServerKeywordPage />;
}
