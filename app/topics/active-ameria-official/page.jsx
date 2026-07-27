import ActiveAmeriaOfficialKeywordPage, { generateMetadata } from './active-ameria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaOfficialKeywordPage />;
}
