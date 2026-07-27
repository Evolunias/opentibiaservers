import OfficialCoxaotServerKeywordPage, { generateMetadata } from './official-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotServerKeywordPage />;
}
