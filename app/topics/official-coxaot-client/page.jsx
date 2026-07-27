import OfficialCoxaotClientKeywordPage, { generateMetadata } from './official-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotClientKeywordPage />;
}
