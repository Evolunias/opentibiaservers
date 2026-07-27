import PopularCyntaraOfficialKeywordPage, { generateMetadata } from './popular-cyntara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraOfficialKeywordPage />;
}
