import OfficialCoxaotLoginKeywordPage, { generateMetadata } from './official-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotLoginKeywordPage />;
}
