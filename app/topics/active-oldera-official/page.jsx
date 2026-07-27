import ActiveOlderaOfficialKeywordPage, { generateMetadata } from './active-oldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaOfficialKeywordPage />;
}
