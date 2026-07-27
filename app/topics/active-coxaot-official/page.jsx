import ActiveCoxaotOfficialKeywordPage, { generateMetadata } from './active-coxaot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotOfficialKeywordPage />;
}
